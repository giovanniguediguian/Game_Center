import time
import random
import json
from random import choice

ARQUIVO = "jogadores.json"

def carregar_ranking():
    try:
        with open(ARQUIVO, "r") as arquivo:
            return json.load(arquivo)
    except:
        return {}

def salvar_ranking(ranking):
    with open(ARQUIVO, "w") as arquivo:
        json.dump(ranking, arquivo, indent=4)


def criar_usuario(senha):
    return {
        "senha": senha,
        "forca": 0,
        "velha": 0,
        "jokenpo": 0,
        "blackjack": 0,
        "reflexo": 0
    }


def garantir_estatisticas_usuario(jogador):
    usuario = ranking.get(jogador)
    if usuario is None:
        return
    for chave in ["forca", "velha", "jokenpo", "blackjack", "qse"]:
        usuario.setdefault(chave, 0)


def jkp():

    itens = ["Pedra", "Papel", "Tesoura"]

    while True:
        try:
            escolha = int(input("\n✊ Bem-vindo ao JOKENPÔ!\nEscolha:\n1 - Pedra\n2 - Papel\n3 - Tesoura\n🎯 Opção: "))
        except ValueError:
            print("⚠️ Digite apenas números.")
            continue

        computador = random.choice(itens)

        print("\nJO")
        time.sleep(1)
        print("KEN")
        time.sleep(1)
        print("PÔ!\n")

        print(f"🤖 Computador escolheu: {computador}")

        if escolha == 1:
            if computador == "Pedra":
                print("🤝 Empate!")
            elif computador == "Papel":
                print("💀 Computador venceu!")
            else:
                print("🏆 Você venceu!")
                ranking[jogador]["jokenpo"] += 1
                salvar_ranking(ranking)

        elif escolha == 2:
            if computador == "Pedra":
                print("🏆 Você venceu!")
                ranking[jogador]["jokenpo"] += 1
                salvar_ranking(ranking)
            elif computador == "Papel":
                print("🤝 Empate!")
            else:
                print("💀 Computador venceu!")

        elif escolha == 3:
            if computador == "Pedra":
                print("💀 Computador venceu!")
            elif computador == "Papel":
                print("🏆 Você venceu!")
                ranking[jogador]["jokenpo"] += 1
                salvar_ranking(ranking)
            else:
                print("🤝 Empate!")

        else:
            print("⚠️ Opção inválida.")
            continue

        novamente = input("\n🔄 Jogar novamente? (s/n): ").lower()

        if novamente != "s":
            print("👋 Voltando ao Game Center...")
            return

def jf():
    Animais = ["cachorro", "gato", "elefante", "leao", "tigre", "urso", "girafa", "zebra", "coelho", "macaco"]
    Frutas = ["maca", "banana", "laranja", "uva", "abacaxi", "manga", "morango", "pera", "melancia", "kiwi"]
    Paises = ["brasil", "argentina", "franca", "italia", "espanha", "alemanha", "japao", "china", "canada", "australia"]

    def categoria():
        print("\n📋 Escolha a categoria:")
        print("1 - 🐶 Animais")
        print("2 - 🍎 Frutas")
        print("3 - 🌎 Países")

        try:
            escolha = int(input("🎯 Digite a categoria: "))
        except ValueError:
            print("⚠️ Entrada inválida. Categoria Animais selecionada.")
            return choice(Animais)

        if escolha == 1:
            return choice(Animais)
        elif escolha == 2:
            return choice(Frutas)
        elif escolha == 3:
            return choice(Paises)
        else:
            print("⚠️ Opção inválida. Categoria Animais selecionada.")
            return choice(Animais)

    while True:

        palavra_secreta = categoria()
        letras_tentadas = set()
        tentativas = 6

        print("\n🪢 ===== JOGO DA FORCA =====")

        while tentativas > 0:

            palavra_mostrada = " ".join(
                letra if letra in letras_tentadas else "_"
                for letra in palavra_secreta
            )

            print(f"\nPalavra: {palavra_mostrada}")

            if "_" not in palavra_mostrada:
                print(f"🏆 Parabéns! A palavra era '{palavra_secreta}'.")
                ranking[jogador]["forca"] += 1
                salvar_ranking(ranking)
                break

            palpite = input("Digite uma letra ou a palavra inteira: ").lower()

            if not palpite or palpite.isdigit():
                print("⚠️ Digite apenas letras.")
                continue

            if len(palpite) > 1:
                if palpite == palavra_secreta:
                    print(f"🏆 Parabéns! A palavra era '{palavra_secreta}'.")
                    ranking[jogador]["forca"] += 1
                    salvar_ranking(ranking)
                    break
                else:
                    tentativas -= 1
                    print(f"❌ Palavra incorreta! Restam {tentativas} tentativas.")
                    continue

            if palpite in letras_tentadas:
                print("⚠️ Você já tentou essa letra.")
                continue

            letras_tentadas.add(palpite)

            if palpite in palavra_secreta:
                print("✅ Boa! Você acertou uma letra.")
            else:
                tentativas -= 1
                print(f"❌ Letra incorreta! Restam {tentativas} tentativas.")

        print(f"\n💀 Fim de jogo! A palavra era '{palavra_secreta}'.")

        while True:
            opcao = input("Jogar novamente? (s/n): ").lower()

            if opcao == "s":
                break
            elif opcao == "n":
                print("Até a próxima!")
                return
            else:
                print("Opção inválida, digite novamente!")

def jv():

    while True:

        tabuleiro = [" " for _ in range(9)]
        jogador_atual = "X"

        def mostrar():
            print(f"\n {tabuleiro[0]} | {tabuleiro[1]} | {tabuleiro[2]} ")
            print("---+---+---")
            print(f" {tabuleiro[3]} | {tabuleiro[4]} | {tabuleiro[5]} ")
            print("---+---+---")
            print(f" {tabuleiro[6]} | {tabuleiro[7]} | {tabuleiro[8]} ")

        def venceu(j):
            combinacoes = [
                (0,1,2),(3,4,5),(6,7,8),
                (0,3,6),(1,4,7),(2,5,8),
                (0,4,8),(2,4,6)
            ]
            for a,b,c in combinacoes:
                if tabuleiro[a] == tabuleiro[b] == tabuleiro[c] == j:
                    return True
            return False

        def cheio():
            return " " not in tabuleiro

        while True:

            mostrar()

            try:
                jogada = int(input("Jogador X, escolha (1-9): ")) - 1
            except ValueError:
                print("⚠️ Jogada inválida.")
                continue

            if jogada < 0 or jogada > 8:
                print("⚠️ Fora do tabuleiro.")
                continue

            if tabuleiro[jogada] != " ":
                print("⚠️ Casa ocupada.")
                continue

            tabuleiro[jogada] = "X"

            if venceu("X"):
                mostrar()
                print("🏆 Você venceu!")
                ranking[jogador]["velha"] += 1
                salvar_ranking(ranking)
                break

            if cheio():
                mostrar()
                print("🤝 Empate!")
                break

            jogada_feita = False

            for i in range(9):
                if tabuleiro[i] == " ":
                    tabuleiro[i] = "O"
                    if venceu("O"):
                        jogada_feita = True
                        break
                    tabuleiro[i] = " "

            if not jogada_feita:

                for i in range(9):
                    if tabuleiro[i] == " ":
                        tabuleiro[i] = "X"
                        if venceu("X"):
                            tabuleiro[i] = "O"
                            jogada_feita = True
                            break
                        tabuleiro[i] = " "

            if not jogada_feita:

                while True:
                    jogada_cpu = random.randint(0, 8)

                    if tabuleiro[jogada_cpu] == " ":
                        tabuleiro[jogada_cpu] = "O"
                        break

            if venceu("O"):
                mostrar()
                print("💀 Computador venceu!")
                break

            if cheio():
                mostrar()
                print("🤝 Empate!")
                break

        while True:
            opcao = input("Jogar novamente? (s/n): ").lower()

            if opcao == "s":
                break
            elif opcao == "n":
                print("Até a próxima!")
                return
            else:
                print("Opção inválida, digite novamente!")

def bj():

    valores = {
        "A": 11,
        "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7, "8": 8, "9": 9,
        "10": 10, "J": 10, "Q": 10, "K": 10
    }

    baralho = list(valores.keys())

    while True:

        jogador_mao = []
        cpu_mao = []

        def somar(mao):
            return sum(valores[c] for c in mao)

        jogador_mao.append(random.choice(baralho))
        jogador_mao.append(random.choice(baralho))

        cpu_mao.append(random.choice(baralho))
        cpu_mao.append(random.choice(baralho))

        print("\n🃏 ===== BLACKJACK 21 =====")

        while True:

            print(f"\nSua mão: {jogador_mao} | Total: {somar(jogador_mao)}")
            print(f"CPU mostra: {cpu_mao[0]}")

            if somar(jogador_mao) > 21:
                print("💀 Você estourou! Perdeu.")
                break

            opcao = input("Puxar carta? (s/n): ").lower()

            if opcao == "s":
                jogador_mao.append(random.choice(baralho))

            elif opcao == "n":
                break

            else:
                print("Opção inválida.")

        if somar(jogador_mao) > 21:
            pass

        else:

            print("\n🤖 Turno da CPU...")

            while somar(cpu_mao) < 17:
                cpu_mao.append(random.choice(baralho))

            print(f"CPU mão: {cpu_mao} | Total: {somar(cpu_mao)}")

            jogador_total = somar(jogador_mao)
            cpu_total = somar(cpu_mao)

            if cpu_total > 21 or jogador_total > cpu_total:
                print("🏆 Você venceu!")
                ranking[jogador]["blackjack"] = ranking[jogador].get("blackjack", 0) + 1
                salvar_ranking(ranking)

            elif jogador_total < cpu_total:
                print("💀 CPU venceu!")

            else:
                print("🤝 Empate!")

        while True:
            opcao = input("Jogar novamente? (s/n): ").lower()

            if opcao == "s":
                break
            elif opcao == "n":
                print("Até a próxima!")
                return
            else:
                print("Opção inválida.")

def reflexo():

    print("\n⚡ ===== DESAFIO DE REFLEXO =====")
    print("Espere a mensagem 'AGORA!' e pressione Enter o mais rápido possível.")

    while True:

        input("\nPressione Enter para começar...")

        espera = random.uniform(2, 5)
        time.sleep(espera)

        print("\n🔥 AGORA!")

        inicio = time.time()
        input()
        fim = time.time()

        tempo = fim - inicio

        print(f"⏱️ Seu tempo de reação: {tempo:.3f} segundos")

        if tempo < 0.25:
            print("🏆 Lendário!")
            ranking[jogador]["reflexo"] += 1
            salvar_ranking(ranking)

        elif tempo < 0.5:
            print("🔥 Muito bom!")

        elif tempo < 1:
            print("🙂 Ok... dá pra melhorar")

        else:
            print("🐌 Muito lento!")

        while True:
            opcao = input("Jogar novamente? (s/n): ").lower()

            if opcao == "s":
                break
            elif opcao == "n":
                return
            else:
                print("Opção inválida.")

ranking = carregar_ranking()

while True:

    jogador = input("👤 Digite seu nome: ").strip()

    if jogador in ranking:
        garantir_estatisticas_usuario(jogador)

        print(f"\n👋 Olá, {jogador}!")
        print("1 - Entrar")
        print("2 - Não sou eu")
        print("3 - Excluir jogador")

        try:
            escolha = int(input("Escolha uma opção: "))

        except ValueError:
            print("⚠️ Opção inválida.\n")
            continue

        if escolha == 1:

            while True:

                senha = input("🔒 Digite sua senha: ")

                if senha == ranking[jogador]["senha"]:
                    print("✅ Login realizado com sucesso!\n")
                    break

                else:
                    print("❌ Senha incorreta.")
                    tentar = input("Tentar novamente? (s/n): ").lower()

                    if tentar == "n":
                        break

            if senha == ranking[jogador]["senha"]:
                break

        elif escolha == 2:
            continue

        elif escolha == 3:

            senha = input("🔒 Digite a senha para excluir o jogador: ")

            if senha == ranking[jogador]["senha"]:

                confirmar = input(f"⚠️ Tem certeza que deseja excluir '{jogador}'? (s/n): ").lower()

                if confirmar == "s":
                    del ranking[jogador]
                    salvar_ranking(ranking)
                    print("🗑️ Jogador excluído com sucesso!\n")

            else:
                print("❌ Senha incorreta.\n")

        else:
            print("⚠️ Opção inválida.\n")

    else:

        print("\n✨ Novo jogador!")

        while True:

            senha = input("🔑 Crie uma senha: ")

            confirmar = input("🔑 Confirme a senha: ")

            if senha == confirmar:

                ranking[jogador] = criar_usuario(senha)

                salvar_ranking(ranking)

                print("✅ Cadastro realizado com sucesso!\n")

                break

            else:
                print("❌ As senhas não coincidem.\n")

        break

while True:
  print("================")
  print("🎮 GAME CENTER 🎮")
  print("================")
  print("Olá, Bem vindo ao Game Center! Escolha o que quer jogar!")
  print("1 - JOKENPÔ")
  print("2 - Jogo da Forca")
  print("3 - Jogo da Velha")
  print("4 - Blackjack")
  print("5 - Desafio de Reflexo")
  print("6 - 📊 Ranking")
  print("7 - 📖 Regras")
  print("8 - Sair")

  try:
    njogo = int(input("Digite o número do jogo: "))

    if njogo == 1:
      jkp()

    elif njogo == 2:
      jf()

    elif njogo == 3:
      jv()

    elif njogo == 4:
      bj()

    elif njogo == 5:
      reflexo()

    elif njogo == 6:
        print("\n📊 ===== RANKING =====")

        ranking = carregar_ranking()
        lista_ranking = []

        for nome, stats in ranking.items():
            total = (
                stats.get("forca", 0) +
                stats.get("velha", 0) +
                stats.get("jokenpo", 0) +
                stats.get("blackjack", 0) +
                stats.get("reflexo", 0)
            )

            lista_ranking.append((nome, total, stats))

        lista_ranking.sort(key=lambda jogador: jogador[1],reverse=True)

        medalhas = ["🥇", "🥈", "🥉"]

        for posicao, (nome, total, stats) in enumerate(lista_ranking, start=1):

            if posicao <= 3:
                medalha = medalhas[posicao - 1]
            else:
                medalha = "🏅"

            print(f"\n{medalha} {posicao}º - {nome}")
            print(f"⭐ Total: {total}")
            print(f"🪢 Forca: {stats.get('forca', 0)}")
            print(f"⭕ Velha: {stats.get('velha', 0)}")
            print(f"✊ Jokenpô: {stats.get('jokenpo', 0)}")
            print(f"💰 Blackjack: {stats.get('blackjack', 0)}")
            print(f"🧠 Desafio de Reflexo: {stats.get('reflexo', 0)}")

        while True:
            voltar = input("\nDigite 'r' para retornar: ").lower()
            if voltar == "r":
                break
            else:
                print("Opção inválida.")

    elif njogo == 7:
      print("\n📖 ===== REGRAS =====")
      print("🎮 JOKENPÔ: pedra, papel ou tesoura contra o computador.")
      print("🪢 FORCA: descubra a palavra antes das tentativas acabarem.")
      print("⭕ VELHA: alinhe 3 símbolos iguais (X ou O).")
      print("💰 BLACKJACK: alcance 21 sem estourar.")
      print("🧠 DESAFIO DE REFLEXO: reaja o mais rápido possível.")

      while True:
        voltar = input("Digite 'r' para retornar ao menu: ").lower()
        if voltar == "r":
          break
        else:
          print("Opção inválida.")

    elif njogo == 8:
      print("Até a próxima!")
      break

    else:
      print("Opção inválida, digite novamente!")
      continue

  except ValueError:
    print("Opção inválida, digite novamente!")
    continue
