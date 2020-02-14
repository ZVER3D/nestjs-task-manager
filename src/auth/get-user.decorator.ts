import { createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator((_, req) => {
  return req.user;
});
