import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="glass-card rounded-none border-t border-border/50 px-4 py-3 flex gap-3">
        <Button variant="accent" className="flex-1" asChild>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20book%20a%20session."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4" />
            Book Session
          </a>
        </Button>
        <Button variant="default" className="flex-1" asChild>
          <a href="/online-rehab">
            Start Online Rehab
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
