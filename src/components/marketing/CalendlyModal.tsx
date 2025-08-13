import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import React from "react";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ open, onOpenChange, url }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Book Your Free Automation Audit</DialogTitle>
          <DialogDescription>Pick a time that works for you.</DialogDescription>
        </DialogHeader>
        <div className="rounded-md overflow-hidden">
          <iframe
            src={url}
            style={{ width: "100%", height: "630px", border: 0 }}
            title="Calendly Scheduling"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
