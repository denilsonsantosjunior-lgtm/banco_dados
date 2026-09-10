package backend;

import java.util.ArrayList;

public class AulaUm{
public static void main(String[] arg){

ArrayList<String> carrinho = new ArrayList<>();

carrinho.add("Notebook");
carrinho.add("Mouse");
carrinho.add("Teclado");
carrinho.add("Fone");
carrinho.add("Keycaps");
carrinho.add("Desktop");
carrinho.add("Caixa-Som");
carrinho.add("Hub-USB");
carrinho.add("Mousepad");
carrinho.add("Carregador");



System.out.printf("\nNo carrinho tem: %s \n", carrinho);

carrinho.remove("Fone");

System.out.printf("\nApós a remoção do item, no carrinho tem: %s \n", carrinho);

System.out.printf("\n Total de itens no carrinho tem: %s \n", carrinho.size());

System.out.printf("\n O último item do carrinho é: %s\n", carrinho.get(carrinho.size()-1));

System.out.printf("\nNo carrinho tem: %s \n", carrinho);

}
}



