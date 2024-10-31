declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const sendDataToGA = async () => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbx_1tmN1SfPMVQKGMnrxXl_mKVSjLtQS5Bqt0hL5XMu4pbOkC1m_8e1wNniEkdUjS0b/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, variant: "ghk_3579_1" }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
