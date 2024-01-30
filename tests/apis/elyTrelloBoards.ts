import { Page, APIRequestContext, expect } from '@playwright/test';
import { BoardsResponse } from '@type/elyTrelloApi';
import * as dotenv from 'dotenv';
dotenv.config();

export class TrelloBoards {
	getABoard: (id: string) => string;
	page: Page;
	api: APIRequestContext;
	baseUrl: string;
	apiKey: string;
	apiToken: string;
	auth: { key: string; token: string };

	constructor(driver: Page) {
		this.page = driver;
		this.api = this.page.request;
		this.getABoard = (id: string) => `/boards/${id}`;
		this.baseUrl = process.env.CI ? process.env.TRELLO_ENV_CI_BASEURL : process.env.TRELLO_ENV_QA_BASEURL;
		this.apiKey = process.env.CI ? process.env.TRELLO_API_CI_KEY : process.env.TRELLO_API_KEY;
		this.apiToken = process.env.CI ? process.env.TRELLO_API_CI_TOKEN : process.env.TRELLO_API_TOKEN;
		this.auth = {
			key: this.apiKey,
			token: this.apiToken,
		};
	}

	async getBoard(givenBoardId: string) {
		if (!this.baseUrl) throw new Error('🚨️ Base URL not found');
		if (!this.apiKey) throw new Error('🚨️ API Key not found');
		if (!this.apiToken) throw new Error('🚨️ API Token not found');
		const endpoint = this.baseUrl + this.getABoard(givenBoardId);
		console.log('🎭️ Endpoint:', endpoint);
		const response = await this.api.get(endpoint, { params: this.auth });
		expect(response.ok()).toBe(true);
		const body = (await response.json()) as BoardsResponse;
		return body;
	}
}
