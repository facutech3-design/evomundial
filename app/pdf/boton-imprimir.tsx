"use client"

export default function BotonImprimir() {
  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100 }} className="no-print">
      <button
        onClick={() => window.print()}
        style={{
          background: "#1a6fb3",
          color: "white",
          border: "none",
          borderRadius: 10,
          padding: "10px 22px",
          fontWeight: 800,
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        Imprimir / Guardar PDF
      </button>
    </div>
  )
}
