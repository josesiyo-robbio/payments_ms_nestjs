


//ENDPOINTS
import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) 
  {


  }


  //create a session
  @Post('create-payment-session')
  createPaymentSession()
  {
    return this.paymentsService.createPaymentSession();
  }


  //the payment success yeah! url
  @Get('success')
  success()
  {
    return {
      ok : true,
      message : 'payment made successfully'
    }
  }


  @Get('cancel')
  cancel()
  {
    return {
      ok : false,
      message : 'payment cancelled'
    }
  }


  @Post('webhook')
  async stripeWebhook()
  {
    return 'stripeWebhook';
  }



}
