import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { IMailProvider, IMessage } from 'providers/IMailProvider'
import {
  __HOST__,
  __PASSWORD__,
  __SERVICE__,
  __USER__,
} from '../../config/config'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: __SERVICE__,
      host: __HOST__,
      auth: {
        user: __USER__,
        pass: __PASSWORD__,
      },
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    const options = {
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    }

    await this.transporter.sendMail(options)
  }
}
