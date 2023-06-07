/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const nome1: string = "João Silva"
	const idade1: number = 36
	const peso1: number = 80
	const altura1: number = 1.80
	const ehDev1: boolean = true

	const nome2: string = "Maria Santos"
	const idade2: number = 30
	const peso2: number = 65
	const altura2: number = 1.60
	const ehDev2: boolean = true
	
	const nome3: string = "José Silva"
	const idade3: number = 50
	const peso3: number = 75
	const altura3: number = 1.75
	const ehDev3: boolean = false

	const calculaImc = (nome: string, peso: number, altura: number)=>{
		const imc =  peso / (altura * altura)
		console.log(`O IMC de ${nome} é ${imc.toFixed(2)}`);
	}

	const contarDev = (...devs:boolean[])=>{
		let count = 0
		devs.filter((dev)=>{			
			if(dev){
				count = count + 1
			}
		})
		console.log("Quantidade de devs: " + count);
		
	}

	const buscaNome = (...nomes: string[])=>{
		console.log("Nomes com sobrenome Silva:");
		nomes.filter((nome)=> {
			if(nome.includes("Silva")){
				console.log(nome);
			
			}
		})
	}
	//R01
	const somaIdades: number = idade1 + idade2 + idade3 
	console.log("Soma das idades: " + somaIdades)
	//R02
	const nomes: string = nome1 + ", " + nome2 + ", " + nome3
	console.log("Nomes: " + nomes)
	//R03
	calculaImc(nome1, peso1, altura1)
	calculaImc(nome2, peso2, altura2)
	calculaImc(nome3, peso3, altura3)
	//R04
	contarDev(ehDev1, ehDev2, ehDev3)
	//R05
	buscaNome(nome1, nome2, nome3)
	


	
	
});
