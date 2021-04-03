# AIDC-CLIENT

by SGGW WZIM Inf. 2019/gr.4
</br>
>Sprawdź również [AIDC-SERVER](https://github.com/szellah/aidc-server)

</br></br>
# Spis treści
- [Sposób działania](#sposób-działania)
- [Nazewnictwo](#nazewnictwo)
- [Potrzebne oprogramowanie](#potrzebne-oprogramowanie)
- [Instalacja](#instalacja)
  - [Node.js](#nodejs)
  - [Android Studio](#android-studio)
  - [Expo CLI](#expo-cli)
  - [React Navigation](#react-navigation)
  - [axios.js](#axiosjs)
- [Konfiguracja](#konfiguracja)
  - [Podmiana adresu serwera](#podmiana-adresu-serwera)
  - [Tworzenie maszyny wirtualnej AVD](#tworzenie-maszyny-wirtualnej-avd)
- [Testowanie](#testowanie)
- [Materiały Pomocnicze](#materiały-pomocnicze)
</br></br></br>

# Klient wraz z graficznym UI do aplikacji aidc
Jedno z dwóch głównych repozytoriów związanych z projektem AIDC (Automatic identification and data capture). To dokładne repozytorium zajmuje się kliencką częścią oprogramowania. Jest to mianowicie interfejs graficzny oraz szereg funkcji łączących go z serwerem. Całość projektu jest tworzona w języku JavaScript z powodów jego popularności na rynku pracy, przede wszystkim w branży aplikacji mobilnych oraz łatwemu przekazywaniu danych nadesłanych przez serwer.

# Sposób działania
Aplikacja, tak jak to się przyjęło ze standardami React-Native jest tworzona z głównego pliku App.js . Kieruje wpierw do ekranu logowania, który poprzez zapytanie http z wykorzystaniem funkcjonalności biblioteki Axios, poprosi serwer o utworzenie sesji i pobierze oraz zapisze odpowiedni token. Następnie jeżeli logowanie odbyło się pomyślnie przeniesie nas do ekranu głównego. Wewnątrz znajduje się tak zwany 'Stos nawigacyjny' obsługiwanego przez bibliotekę React-Native/Navigation, na który wrzucane będą poszczególne ekrany w zależności od naciśniętych przycisków. Wewnątrz aplikacji będzie można nawigować do różnorakich ekranów z czego każdy z nich będzie pozwalać na wykonanie odpowiednich operacji. Większość z nich wysyłać będzie zapytania do strony serwerowej. Wszystkie funkcje tego typu znajdować się będą w bibliotece Creq_lib wewnątrz folderu clientRequests. Dane filtrowane są w pełni po stronie serwera ze względów bezpieczeństwa, klient jedynie otrzymuje gotowe obiekty, które ustawia w odpowiednich oknach, bądź renderuje w postaci tabel. Aplikacja na odpowiednich ekranach będzie pozwalać na korzystanie ze skanera kodów QR.

# Nazewnictwo
- funkcje i pliki rozpoczynają się dużymi literami
- foldery zaś małymi
- wszystkie funkcje w folderze /clientRequests posiadają przedrostek 'Creq'
- funkcje to czasownik i czasem po nim rzeczownik, do którego odnosi się poprzedni
- jeżeli w pliku znajduje się jedna główna funkcja pomocnicza, to plik powinien nosić nazwę funkcji
- komponenty React traktowane są jak funkcje

# Potrzebne oprogramowanie
Aktualna wersja aidc-client działa przy pomocy poniższych programów:
- **Node.js**
>Interpretuje JavaScript na komputerze oraz urządzeniu mobilnym
- **Android Studio**
>Pozwala na korzystanie z wirtualnej maszyny testowej android
- **Expo CLI**
>Interpretuje kod React Native i pozwala na testowanie aplikacji na wirtualnej maszynie
- **React Navigation**
>Pozwala na korzystanie z narzędzi nawigujących
- **axios.js**
>Wysyła zapytania POST

# Instalacja
Jeżeli posiadacie wszystkie powyższe programy już na komputerze nie trzeba czytać poniżej sekcji.
>**Uwaga:** Przed instalacją niektórych programów, opłaca się pobrać repozytorium

### Node.js
Wystarczy wejść pod ten [link](https://nodejs.org/en/) i pobrać najnowszą, bądź najnowszą stabilną wersję. Następnie zainstalować, 
i komendą `node -v` sprawdzić czy pokazuję się wam odpowiednia wersja Node.js .

###  Android Studio 
Można pobrać [tutaj](https://developer.android.com/studio). Następnie wystarczy zainstalować. Możliwe że będzie wymagać zarejestrowania się przy pomocy konta google.

### Expo CLI
Ten program działa prawie w pełni z terminala, jako moduł Node.js więc można go zainstalować poprzez menedżera modułów npm. Należy otworzyć terminal wewnątrz folderu, w którym znajduje się projekt i wpisać poniższą komendę.
</br></br>
`npm install -g expo-cli`
</br></br>

### React Navigation
To również jest biblioteka Node.js więc wystarczy wpisać poniższe komendy, terminalu otwartym wewnątrz folderu projektu.
</br></br>
`npm install @react-navigation/native`
</br></br>
`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
</br></br>
`npm install @react-navigation/stack`
</br></br>

### axios.js
axios.js jest również modułem Node-a więc należy postępować jak z powyższymi
</br></br>
`npm install axios --save`
</br></br>

# Konfiguracja
Jeżeli zainstalowaliśmy wszystkie powyższe programy w sposób poprawny jedyne co nam pozostało to zmiana URL serwera oraz utworzenie maszyny wirtualnej.
</br></br>

### Podmiana adresu serwera
Należy otworzyć plik serverInfo.js, zlokalizowany wewnątrz folderu clientRequests w dowolnym edytorze tekstowym i ustawienie adresu serwera. W przypadku uruchamiania serwera na tym samym komputerze będzie to wasz adres ip. By nie trzeba było go poprawiać co jakiś czas polecam ustawić albo stayczne IP albo ustawić w tablicy DHCP waszego routera przyporządkowywanie tego samego adresu.
>**Uwaga:** Nie należy ustawiać adresu na localhost. Trzeba pamiętać że uruchamiamy aplikację w maszynie wirtualnej, która znajduje się wewnątrz tej samej sieci, jednakże na swoją własną wirtualną kartę sieciową. Z tego też powodu localhost czy loopback adres '127.0.0.1' będą odnosić się do maszyny wirtualnej a nie do naszego komputera.

</br>

### Tworzenie maszyny wirtualnej AVD
Wpierw otwieramy Android Studio. Następnie musimy wybrać koło zębate z napisem 'Configure' w prawym dolnym rogu. Z listy rozwijanej wybieramy opcję AVD Manager. Jeżeli posiadamy już skonfigurowane urządzenie AVD można pominąć resztę. Naciskamy przycisk 'Create Virtual Device...' w lewym dolnym rogu. Wybieramy 'Phone', po czym z listy wybieramy telefon nam odpowiadający ( np. Pixel 2 ). Naciskamy Next, następnie musimy pobrać odpowiednią wersję oprogramowania, co niekoniecznie ma znaczenie, aczkolwiek polecam pobrać najnowszą. Naciskamy Next. Jeżeli chcemy Zwiększyć możliwości swojego AVD można sprawdzić jego dokładne parametry w 'Show Advanced Settings'. Następnie naciskamy 'Finish'.

# Testowanie
By przetestować aplikację należy włączyć wpierw jej część serwerową. Jeżeli nie posiadamy jej można ją pobrać [tutaj](https://github.com/szellah/aidc-server). 
> **Uwaga:** Duża ilość operacji korzysta z części serwerowej, więc by poprawnie działał jej odpowiednik kliencki należy zainstalować i poprawnie skonfigurować wpierw serwer.

</br>
Wewnąrz folderu zawierajacym Serwer, należy otworzyć terminal i wpisać następująca komendę.

</br></br>
`node Server`
</br></br>
Nastepnie trzeba włączyć maszynę wirtualną. Trzeba wpierw otworzyć Android Studio i poprzez przycisk 'Configure' wybrać 'AVD Manager'. Następnie naciskamy zieloną strzałkę w prawo by uruchomić AVD.
</br></br>
Na sam koniec pozostaje nam uruchomienie aplikacji. Można to zrobić poprzez otworzenie okna terminala wewnątrz folderu projektu aplikacji mobilnej i wpisania poniższej komendy.
</br></br>
`expo Start`
</br></br>
Powinna otworzyć się nam konsola Expo wewnątrz przeglądarki jak i w oknie terminala. By uruchomić aplikację można albo nacisnąć 'a' będąc w terminalu, lub przycisk 'Run on android device/emulator' w konsoli przeglądarkowej.

# Materiały Pomocnicze
Jeżeli w czymkolwiek pojawi się problem odsyłam do odpowiednich dokumentacji i kompendiów wiedzy:
- [JavaScript by MDN](https://developer.mozilla.org/pl/docs/Web/JavaScript)
- [JavaScript by W3schools](https://www.w3schools.com/js/DEFAULT.asp)
- [Node.js](https://nodejs.org/dist/latest-v15.x/docs/api/)
- [React](https://pl.reactjs.org)
- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [Expo CLI](https://docs.expo.io/workflow/expo-cli/)
- [AVD Manager](https://developer.android.com/studio/run/managing-avds)
- [Axios.js on Github](https://github.com/axios/axios#axios)
</br></br>

W szczególności polecam Dokumentacje React Native i Navigation.</br>Zapraszam również na ten kanał na [YouTube](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

