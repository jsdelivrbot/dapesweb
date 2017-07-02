export class UserModel{
    nome: string;
    email: string;
    cpf: string;
    nacionalidade:string;
    naturalidade:string;
    sexo:string;
    nascimento: Date;
    estadoCivil:string;
    conjuge:string;
    telefoneResidencial:string;
    snPossuiTelefoneResidencial:boolean;
    telefoneCelular:string;
    snCelularValidado:boolean;
    mae:string;
    pai:string;
    snPaiDesconhecido:boolean;
    tpDocumento:string;
    nrDocumento:string;
    orgaoExpedidorDocumento:string;
    dataEmissaoDocumento:Date;
    validadeDocumento:Date;
    snValidadeDocumento:boolean;
}