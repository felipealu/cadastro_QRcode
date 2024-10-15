document.addEventListener("DOMContentLoaded", function () {
  const nomeCompleto = document.querySelector("#nomeCompleto");
  const ident = document.querySelector("#ident");
  const loco = document.querySelector("#loco");
  const qrcode = document.querySelector("#qrcode");
  const gerarButton = document.querySelector("#gerar");

  //eventos de mecanismos de crianção do QRCode
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      genQRCode();
    }
  });

  gerarButton.addEventListener("click", () => {
    genQRCode();
  });

  // API para crianção do QRCode
  function genQRCode() {
    if (!nomeCompleto.value || !ident.value || !loco.value) return;

    const data = {
      name: nomeCompleto.value,
      identification: ident.value,
      vehicle: loco.value,
    };

    const jsonString = JSON.stringify(data);

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      jsonString
    )}`;
  }
});
