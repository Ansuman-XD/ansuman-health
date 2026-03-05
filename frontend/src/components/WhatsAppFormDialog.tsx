import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface WhatsAppFormDialogProps {
  trigger: React.ReactNode;
  defaultMessage?: string;
}

const WhatsAppFormDialog = ({ trigger, defaultMessage = "Online Rehab Program" }: WhatsAppFormDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dr., I am interested in ${defaultMessage}.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AReason: ${encodeURIComponent(reason)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-display font-bold text-foreground">Book Online Rehab</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={e => setPhone(e.target.value)} required maxLength={15} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason / Condition</Label>
            <Textarea id="reason" placeholder="Briefly describe your condition or reason" value={reason} onChange={e => setReason(e.target.value)} required maxLength={500} className="min-h-[80px]" />
          </div>
          <Button type="submit" variant="whatsapp" className="w-full" size="lg">
            <Phone className="w-4 h-4" /> Send to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppFormDialog;
