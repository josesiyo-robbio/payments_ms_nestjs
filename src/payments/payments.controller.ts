


//ENDPOINTS
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController 
{
  constructor(private readonly paymentsService: PaymentsService) 
  {


  }


  //create a session
  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto : PaymentSessionDto)
  {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
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
