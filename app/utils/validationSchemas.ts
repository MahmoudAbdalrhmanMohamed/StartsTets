import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون على الأقل 3 أحرف"),
  email: z.string().email("يجب إدخال بريد إلكتروني صحيح"),
  phone: z
    .string()
    .min(10, "رقم الهاتف يجب أن يكون على الأقل 10 أرقام")
    .regex(/^[0-9]+$/, "يجب أن يحتوي على أرقام فقط"),
  subject: z.string().min(10, "الموضوع يجب أن يكون على الأقل 10 أحرف"),
  message: z.string().min(20, "الرسالة يجب أن تكون على الأقل 20 حرفاً"),
});

// export type ContactFormSchema = z.infer<typeof formSchema>;
