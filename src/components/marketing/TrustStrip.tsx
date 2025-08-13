import { Star, ShieldCheck } from "lucide-react";

const TrustStrip = () => {
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center -ml-1 text-primary">
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
        </div>
        <span className="text-sm text-foreground/80">5.0 rating • Upwork reviews</span>
        <span className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          No-risk, free audit
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground">
        <span className="opacity-80">Trusted by</span>
        <span className="font-medium text-foreground/90">SMBs</span>
        <span className="font-medium text-foreground/90">Agencies</span>
        <span className="font-medium text-foreground/90">Nonprofits</span>
        <span className="opacity-70">•</span>
        <span>Airtable</span>
        <span>Google Sheets</span>
        <span>Zapier</span>
        <span>Make</span>
      </div>
    </div>
  );
};

export default TrustStrip;
