import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Smartphone, Building2, AlertCircle } from "lucide-react";
import { useState } from "react";
import upiQR from "@/assets/upi-qr.jpeg";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    utr: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.amount || !formData.utr) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank you! Your donation receipt has been sent to your email.");
        setFormData({ name: "", email: "", amount: "", utr: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding section-green-light text-center">
        <div className="container-narrow mx-auto">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="heading-display mb-4">Donate & Support Our Cause</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your contribution helps us provide care, dignity, and support to the elderly.
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-2xl">
          <div className="bg-accent/50 p-5 rounded-xl flex gap-3 mb-8">
            <AlertCircle className="w-5 h-5 mt-1" />
            <p className="text-sm">
              <strong>Step 1:</strong> Scan the QR code and complete payment.<br />
              <strong>Step 2:</strong> Fill the form below using the same amount & UTR number.
            </p>
          </div>

          {/* UPI Section */}
          <div className="card-service mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-lg">UPI Payment</h2>
            </div>

            <div className="text-center">
              <img src={upiQR} alt="UPI QR Code" className="mx-auto w-44 h-44 mb-3" />
              <p className="text-sm text-muted-foreground">
                UPI ID: <strong>7066883322@ucobank</strong>
              </p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="card-service mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-lg">Bank Transfer Details</h2>
            </div>

            <div className="text-sm space-y-2">
              <p><strong>Account Name:</strong> Manav Seva Chatra</p>
              <p><strong>Bank:</strong> UCO Bank</p>
              <p><strong>UPI Linked Mobile:</strong> 7066883322</p>
            </div>
          </div>

          {/* Donation Form */}
          <div className="card-service">
            <h2 className="font-semibold text-lg mb-4">Donation Details</h2>

            <div className="space-y-4">
              <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} />
              <Input name="amount" type="number" placeholder="Donation Amount (₹) *" value={formData.amount} onChange={handleChange} />
              <Input name="utr" placeholder="UTR / Transaction ID *" value={formData.utr} onChange={handleChange} />
              <Textarea name="message" placeholder="Message (optional)" value={formData.message} onChange={handleChange} />

              <Button onClick={handleSubmit} disabled={loading} className="w-full btn-primary py-5">
                {loading ? "Submitting..." : "Submit & Get Receipt"}
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Donation receipts are sent via email. Eligible under Section 80G.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
