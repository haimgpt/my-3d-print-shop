export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/ai") {
      if (request.method !== "POST") {
        return json({error:"Method not allowed"}, 405);
      }

      if (!env.OPENAI_API_KEY) {
        return json({error:"AI is not configured yet"}, 503);
      }

      try {
        const body = await request.json();
        const question = String(body?.question || "").trim().slice(0, 500);
        const catalog = Array.isArray(body?.catalog) ? body.catalog.slice(0, 50) : [];

        if (!question) return json({error:"Missing question"}, 400);

        const compactCatalog = catalog.map(item => ({
          name: String(item?.name || "").slice(0, 100),
          category: String(item?.category || "").slice(0, 80),
          description: String(item?.description || "").slice(0, 300),
          price: Number.isFinite(item?.price) ? item.price : null,
          colors: Array.isArray(item?.colors) ? item.colors.slice(0, 12).map(x => String(x).slice(0, 40)) : [],
          engravable: !!item?.engravable
        }));

        const instructions =
          "אתה עוזר מכירות בעברית עבור חנות מוצרי תלת-ממד. " +
          "ענה בקצרה, בצורה שירותית ומדויקת ורק לפי נתוני הקטלוג שסופקו. " +
          "אל תמציא מלאי, מידות, זמני אספקה, מחיר או תכונה שלא מופיעים בנתונים. " +
          "אם המידע לא קיים, אמור שאין כרגע מידע כזה באתר. " +
          "קטלוג: " + JSON.stringify(compactCatalog);

        const aiResponse = await fetch("https://api.openai.com/v1/responses", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + env.OPENAI_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "gpt-5.6-luna",
            instructions,
            input: question,
            max_output_tokens: 320
          })
        });

        if (!aiResponse.ok) {
          return json({error:"AI service unavailable"}, 502);
        }

        const data = await aiResponse.json();
        const answer =
          data.output_text ||
          (Array.isArray(data.output)
            ? data.output.flatMap(x => x.content || []).filter(x => x.type === "output_text").map(x => x.text).join("\n")
            : "");

        if (!answer) return json({error:"Empty AI response"}, 502);
        return json({answer});
      } catch {
        return json({error:"Bad request"}, 400);
      }
    }

    return env.ASSETS.fetch(request);
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
