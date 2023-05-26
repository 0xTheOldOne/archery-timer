import { ComponentCustomProperties } from 'vue';
import { I18n } from '@/vue-i18n';

// Étend les propriétés personnalisées du composant Vue
declare module '@vue/runtime-core' {
  // Déclare la propriété $i18n sur chaque composant
  interface ComponentCustomProperties {
    $i18n: I18n;
  }
}