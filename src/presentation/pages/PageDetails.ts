interface PageDetail {
    readonly link: string;
    readonly displayName: string;
}

interface PageDetails {
    readonly demandeRappel: PageDetail;
}

const pageDetails: PageDetails = {
    demandeRappel: {
        link: '/',
        displayName: 'DemandeRappel'
    }
}

export default pageDetails;