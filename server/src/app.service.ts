import { Injectable } from '@nestjs/common';
import {createFooBoard, jsonBoard, createFooGame} from '../../core/src/utils/DraftTest'

@Injectable()
export class AppService {
  getHello(): string {
    let result = 'Hello World!';
    result = result + '<br>' + jsonBoard(createFooBoard(createFooGame()))    
    return result;
  }
}
