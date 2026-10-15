import java.util.Scanner;
import java.util.HashMap;

public class  AulaTres{
	public static void main (String[] args){
		HashMap<String, Double> tabelaPrecos = new HashMap<>();
		tabelaPrecos.put("78910", 4.50);
		tabelaPrecos.put("78920", 8.90);
		tabelaPrecos.put("78930", 12.00);


		//System.out.println("Especificações do Café: "+ tabelaPrecos.get("78920"));
		
		Scanner lerTexto = new Scanner(System.in);
		
		System.out.println("Digite o código de barras: ");
		String codigoBarras = lerTexto.nextLine();

		//System.out.println(tabelaPrecos);

		if (codigoBarras.equals("78910") ) {
			System.out.println("Produto: Chocolate, "+"Valor: R$"+tabelaPrecos.get("78910")+", Código de barras: "+codigoBarras);
		}else if (codigoBarras.equals("78920")) {
			System.out.println("Produto: Café, "+"Valor: R$"+tabelaPrecos.get("78920")+", Código de barras: "+codigoBarras);
		}else if (codigoBarras.equals("78930")) {
			System.out.println("Produto: Azeite, "+"Valor: R$"+tabelaPrecos.get("78930")+", Código de barras: "+codigoBarras);
		}else {
			System.out.println("ERRO: Nenhum produto identificado");
		}

		

	}
}
