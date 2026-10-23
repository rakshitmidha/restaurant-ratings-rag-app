import { answerRestaurantQuestion } from "../service/restaurantRagService";

export interface RestaurantQuestionRequest {
  question: string;
}

export interface RestaurantQuestionResponse {
  answer: string;
}

export async function askAboutRestaurants(
  request: RestaurantQuestionRequest
): Promise<RestaurantQuestionResponse> {
  const question = request.question;
  
  return { answer: await answerRestaurantQuestion(question) };
}
