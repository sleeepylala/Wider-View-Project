# Wider-View-Project

Per questo lavoro ho utilizzato <strong>Parcel</strong> come builder per gestire l'installazione di tutte le dipendenze necessarie. Tra queste dipendenze ci sono Swiper.js, una libreria per implementare lo slider nella sezione hero, e AOS.js, una libreria utilizzata per le animazioni nella sezione bio.
Per quanto riguarda lo stile, ho utilizzato <strong>SCSS</strong> per scrivere i fogli di stile e Prepros per la compilazione automatica degli SCSS in CSS.


# Come Funziona?

Dopo aver scaricato e aperto il file zip del mio codice, vi basterà compilare nel terminale il comando "<strong>npm start</strong>" e vi installerà tutte le dipendenze necessarie e il local host per visualizzare il progetto!


# Struttura Progetto

Il progetto è organizzato in due cartelle principali, configurate di default da Parcel: <strong>src</strong> e <strong>dist</strong>.

Dentro la cartella src, si trovano i seguenti elementi:

 <ul>
            <li>script.js - il file principale JavaScript che contiene il codice per la funzionalità del sito.</li>
            <li>assets/images - una cartella che contiene tutte le immagini utilizzate nel sito.</li>
     <li>assets/fonts - una cartella che contiene tutti i font utilizzati nel sito.</li>
            <li>scss/ - una cartella dedicata agli stili, che include:
                <ul>
                    <li>Vari componenti SCSS modulari per diverse parti del sito.</li>
                    <li>variables.scss - per le variabili SCSS.</li>
                    <li>general.scss - per lo stile generale del sito.</li>
                    <li>style.scss - il file principale che importa tutti gli altri file SCSS e viene compilato in style.css.</li>
                </ul>
            </li>
        </ul>
