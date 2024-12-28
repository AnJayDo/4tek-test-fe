import { EmailTemplate } from "@/app/components/EmailTemplate";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const toList = ["admin@dovanminhan.com"];
    if (email) {
      toList.push(email as string);
    }

    const { data, error } = await resend.emails.send({
      from: "4Tek Test App <no-reply@dovanminhan.com>",
      to: toList,
      subject: "[4Tek] Thanks for subscribing",
      react: EmailTemplate({}) as ReactNode,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
