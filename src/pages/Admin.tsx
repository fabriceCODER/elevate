import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/data/products";
import useProducts from "@/hooks/useProducts";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "password123"
};

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addProduct } = useProducts();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    title: "",
    author: "",
    price: 0,
    image: "",
    rating: 5,
    category: "Mindset",
    featured: false,
    description: "",
    benefits: [],
    amazonUrl: "",
    etsyUrl: "",
    shopifyUrl: "",
  });

  const [benefitInput, setBenefitInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Mindset", "Productivity", "Confidence", "Happiness"];

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === ADMIN_CREDENTIALS.username &&
        loginData.password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin portal!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
    setLoginData({ username: "", password: "" });
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const handleInputChange = (field: keyof Omit<Product, 'id'>, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddBenefit = () => {
    if (benefitInput.trim()) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, benefitInput.trim()]
      }));
      setBenefitInput("");
    }
  };

  const handleRemoveBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.description || formData.benefits.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields and add at least one benefit.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await addProduct(formData);
      toast({
        title: "Success",
        description: "Book added successfully!",
      });
      setFormData({
        title: "",
        author: "",
        price: 0,
        image: "",
        rating: 5,
        category: "Mindset",
        featured: false,
        description: "",
        benefits: [],
      });
      setBenefitInput("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add book. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="text"
                        value={loginData.username}
                        onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                        placeholder="Enter username"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </form>

                  <div className="mt-4 text-center">
                    <Button variant="outline" onClick={() => navigate("/")}>
                      Back to Home
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-heading text-4xl font-bold text-foreground">
                Admin Portal
              </h1>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Add New Book</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Enter book title"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author *</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => handleInputChange("author", e.target.value)}
                        placeholder="Enter author name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", parseFloat(e.target.value) || 0)}
                        placeholder="0.00"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Select value={formData.rating.toString()} onValueChange={(value) => handleInputChange("rating", parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Star{num !== 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange("image", e.target.value)}
                        placeholder="Enter image URL"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="amazonUrl">Amazon URL</Label>
                      <Input
                        id="amazonUrl"
                        value={formData.amazonUrl || ""}
                        onChange={(e) => handleInputChange("amazonUrl", e.target.value)}
                        placeholder="Enter Amazon product URL"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="etsyUrl">Etsy URL</Label>
                      <Input
                        id="etsyUrl"
                        value={formData.etsyUrl || ""}
                        onChange={(e) => handleInputChange("etsyUrl", e.target.value)}
                        placeholder="Enter Etsy product URL"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shopifyUrl">Shopify URL</Label>
                      <Input
                        id="shopifyUrl"
                        value={formData.shopifyUrl || ""}
                        onChange={(e) => handleInputChange("shopifyUrl", e.target.value)}
                        placeholder="Enter Shopify product URL"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Enter book description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Benefits *</Label>
                    <div className="flex gap-2">
                      <Input
                        value={benefitInput}
                        onChange={(e) => setBenefitInput(e.target.value)}
                        placeholder="Add a benefit"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddBenefit())}
                      />
                      <Button type="button" onClick={handleAddBenefit}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.benefits.map((benefit, index) => (
                        <span key={index} className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded">
                          {benefit}
                          <button
                            type="button"
                            onClick={() => handleRemoveBenefit(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange("featured", e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="featured">Featured Book</Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" disabled={isSubmitting} className="flex-1">
                      {isSubmitting ? "Adding Book..." : "Add Book"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => navigate("/shop")}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
