import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, CreditCard, Smartphone, Building2, AlertCircle } from "lucide-react";
import { useState } from "react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <div className="container-narrow mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            Support Us
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Your Donation Changes Lives
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution helps us provide better care, nutritious meals, and medical 
            support to our elderly residents. Thank you for your generosity.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="max-w-2xl mx-auto">
            {/* Notice */}
            <div className="bg-accent/50 rounded-xl p-6 mb-8 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-accent-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-accent-foreground mb-1">
                  Payment Integration Coming Soon
                </h3>
                <p className="text-sm text-accent-foreground/80">
                  Secure online payment via Razorpay and UPI will be available shortly. 
                  For now, please use the bank details below or contact us directly.
                </p>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="card-service mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                Select Donation Amount
              </h2>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-4 rounded-lg font-medium transition-all ${
                      selectedAmount === amount
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="card-service mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                Payment Methods
              </h2>

              <div className="space-y-4">
                {/* UPI */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">UPI Payment</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Scan QR code or use UPI ID to make payment
                  </p>
                  <div className="bg-card p-6 rounded-lg border border-dashed border-border text-center">
                    <p className="text-muted-foreground text-sm">
                      [QR Code Placeholder]
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      UPI ID: donate@manavsevachatra
                    </p>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">Bank Transfer</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="text-foreground font-medium">Manav Seva Chatra</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account Number:</span>
                      <span className="text-foreground font-medium">XXXX XXXX XXXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IFSC Code:</span>
                      <span className="text-foreground font-medium">XXXX0XXXXXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bank:</span>
                      <span className="text-foreground font-medium">State Bank of India</span>
                    </div>
                  </div>
                </div>

                {/* Online Payment */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border opacity-60">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">Credit/Debit Card</h3>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Secure card payments via Razorpay will be enabled soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="btn-primary w-full py-6 text-lg" disabled>
              <Heart className="mr-2 w-5 h-5" />
              Complete Donation
            </Button>

            {/* Tax Benefit */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
              You will receive a receipt via email.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="section-padding section-warm-bg">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              How Your Donation Helps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { amount: "₹500", desc: "Provides nutritious meals for 1 resident for a week" },
              { amount: "₹1,000", desc: "Covers basic medical supplies for a month" },
              { amount: "₹5,000", desc: "Supports one resident's complete care for a month" },
              { amount: "₹25,000", desc: "Helps fund facility improvements and equipment" },
            ].map((item, index) => (
              <div key={index} className="card-service">
                <p className="text-2xl font-serif font-bold text-primary mb-2">{item.amount}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
