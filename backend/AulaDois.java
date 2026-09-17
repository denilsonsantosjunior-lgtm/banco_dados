import java.util.HashMap;

public class AulaDois {
    public static void main(String[] args) {
        // Cria o HashMap onde a chave precisa ser um número inteiro (Integer)
        HashMap<Integer, String> produtos = new HashMap<>();
        
        produtos.put(101, "Notebook"); 
        produtos.put(102, "Mouse");
        produtos.put(103, "Teclado");
        produtos.put(999, "Mesa");
        produtos.put(1000, "Caneta");

        System.out.println(produtos + "\n");
        System.out.println("Apenas dois itens \n");
        
        System.out.println("Produto 101: " + produtos.get(101));
        System.out.println("Produto 103: " + produtos.get(103));

        if (produtos.containsKey(999)) {
            System.out.println("\n Produto: "+ produtos.get(999));
        } else {
            System.out.println("\n Produto não encontrado!");
        }

        produtos.remove(102);
        System.out.println("Depois de remover o 102: " + produtos);
    
    }
}
