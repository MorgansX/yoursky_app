type JWT = {
	accessJwt: string;
	refreshJwt: string;
};

type Service = {
	id: string;
	serviceEndpoint: string;
	type: string;
}

type VerificationMethod = {
	controller: string;
	id: string;
	publicKeyMultibase: string;
	type: string;
}

type DidDoc = {
	"@context": Array<string>;
	alsoKnownAs: Array<string>;
	id: string;
	service: Array<Service>;
	verificationMethod: Array<VerificationMethod>;
};

export interface LoginResponseType extends JWT {
	active: boolean;
	did: string;
	email: string;
	emailAuthFactor: boolean;
	emailConfirmed: boolean;
	handle: string;
	didDoc:DidDoc;
}
