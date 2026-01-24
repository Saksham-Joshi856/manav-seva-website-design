import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Smartphone, Building2, AlertCircle } from "lucide-react";
import { useState } from "react";
import upiQR from "@/assets/upi-qr.jpeg";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [utr, setUtr] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const finalAmount = selectedAmount ?? Number(customAmount);

  const handleSubmit = async () => {
    if (!name || !email || !finalAmount || !utr) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: finalAmount,
          utr,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMessage(
        `Thank you for donating ₹${finalAmount}. Receipt has been sent to your email.`
      );

      // reset form
      setName("");
      setEmail("");
      setUtr("");
      setCustomAmount("");
      setSelectedAmount(1000);
    } catch (err: any) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light text-center">
        <div className="container-narrow mx-auto">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="heading-display mb-4">Support Our Mission</h1>
          <p className="text-muted-foreground">
            Scan the QR, make your contribution, and submit the details below.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl space-y-8">

          {/* Info */}
          <div className="bg-accent/50 p-5 rounded-xl flex gap-3">
            <AlertCircle className="text-accent-foreground" />
            <p className="text-sm">
              After payment, please enter your details correctly.
              A receipt will be emailed to you.
            </p>
          </div>

          {/* Amount */}
          <div className="card-service">
            <h2 className="font-serif text-xl mb-4">Donation Amount</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-lg ${selectedAmount === amt
                      ? "bg-primary text-white"
                      : "bg-muted"
                    }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
          </div>

          {/* UPI */}
          <div className="card-service text-center">
            <div className="flex justify-center gap-2 mb-2">
              <Smartphone className="text-primary" />
              <h3 className="font-medium">UPI Payment</h3>
            </div>
            <img src={upiQR} alt="UPI QR" className="mx-auto w-40" />
            <p className="text-sm mt-2 text-muted-foreground">
              UPI ID: 7066883322@ucobank
            </p>
          </div>

          {/* Bank */}
          <div className="card-service">
            <div className="flex gap-2 mb-2">
              <Building2 className="text-primary" />
              <h3 className="font-medium">Bank Details</h3>
            </div>
            <p className="text-sm">Account Name: Manav Seva Chatra</p>
            <p className="text-sm">Bank: State Bank of India</p>
          </div>

          {/* Form */}
          <div className="card-service space-y-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="UPI Transaction ID (UTR)" value={utr} onChange={(e) => setUtr(e.target.value)} />

            {message && (
              <p className="text-sm text-center text-primary">{message}</p>
            )}

            <Button onClick={handleSubmit} disabled={loading} className="w-full py-6">
              <Heart className="mr-2" />
              {loading ? "Processing..." : "Submit Donation Details"}
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Donations are eligible under Section 80G. Receipt will be emailed.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
