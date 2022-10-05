import { getMessages } from "../static-data";
export default function messages(state = getMessages(10), action) {
    return state;
}