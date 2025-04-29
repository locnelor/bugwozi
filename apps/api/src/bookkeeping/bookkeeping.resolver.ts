import { Resolver } from '@nestjs/graphql';
import { createReadStream } from 'fs';
import OpenAI from 'openai';

@Resolver()
export class BookkeepingResolver {
  constructor() {
    // this.init()
  }

  public async init() {
    const openai = new OpenAI({
      apiKey: "sk-5d0df4e61d404b6ab46370ff7686b666",
      baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    })

    // 上传本地图片文件
    const file = await openai.files.create({
      file: createReadStream('/img.png'),
      purpose: "assistants",
    });

    // 使用上传的图片进行账单信息识别
    const response = await openai.chat.completions.create({
      model: "qwen-vl-max", // 此处以qwen-vl-max为例，可按需更换模型名称
      messages: [
        {
          role: "system",
          content: `你是一个专业的账单信息识别助手，请帮我从图片中提取所有账单相关信息，包括日期、金额、商家名称、消费类别等。请以结构化的方式返回结果。`
        },
        {
          role: "user", content: [
            { type: "text", text: "请识别这张账单图片中的所有信息" },
            { type: "image_url", image_url: { "url": `file-${file.id}` } }
          ]
        }]
    });
  }
}
