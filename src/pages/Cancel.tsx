// src/pages/Cancel.tsx
import React from "react";

export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Payment Cancelled</h1>
        <p>If you need help, contact our support team at support@selfix.io.</p>
      </div>
    </div>
  );
}
