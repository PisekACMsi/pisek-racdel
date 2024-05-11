# PIŠEK - računalniška delavnica

Git repozitorij za računalniško delavnico na temo platforme PIŠEK namenjena za poučevanje osnov programiranja za osnovnošolce in srednješolce.


## Opis

Platforma je javno dostopna na naslovu: [pisek.acm.si](https://pisek.acm.si)


## Inštalacija

Priporočljiva je uporava Visual Studio Code.
Repozitorij lahko klonirate na vaš računalnik z uporabo naslednjega ukaza:

```
git clone --recurse-submodules https://github.com/PisekACMsi/pisek-racdelavnica.git
```

V primeru da ste klonirali repozitorij brez argumenta ```--recurse-submodules```, je nato potrebno dodati mapo ```_common/modules``` in v njej izvesti naslednje ukaze:

```
git submodule init
git submodule update
```

## Posodabljanje

Za posodobitev repozitorija in vseh podmodulov uporabite naslednji ukaz:

```
git pull --recurse-submodules
```

