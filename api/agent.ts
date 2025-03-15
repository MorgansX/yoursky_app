import { AtpAgent } from "@atproto/api";
import {LoginResponseType} from "@/modules/Auth/types/loginResponse";

export const agent = new AtpAgent({
	service: "https://bsky.social",
});

class ApiService {
	async login({
		identifier,
		password,
	}: {
		identifier: string;
		password: string;
	}):Promise<LoginResponseType> {
		await agent.login({
			identifier,
			password,
		});
	}
}

export const bskyServise = new ApiService();
