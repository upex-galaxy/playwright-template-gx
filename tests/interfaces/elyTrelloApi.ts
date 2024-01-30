export interface BoardsResponse {
	id: string;
	name: string;
	desc: string;
	closed: boolean;
	idOrganization: string;
	idEnterprise: string | null;
	pinned: boolean;
	url: string;
	shortUrl: string;
}
