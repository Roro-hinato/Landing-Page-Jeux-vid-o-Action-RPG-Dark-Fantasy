# Vidéo de fond du Hero

Dépose ta vidéo dans ce dossier sous le nom **`hero.mp4`** (requis).

Optionnellement, ajoute aussi **`hero.webm`** (même contenu, encodage différent) :
les navigateurs modernes la préféreront et ça économise ~30-50% de bande passante.
Si `hero.webm` est absent, le navigateur prend `hero.mp4` en fallback automatique.

## Caractéristiques recommandées

- **Durée** : 8-15 secondes en boucle
- **Résolution** : 1920×1080 suffit (la vidéo est assombrie à 40% donc pas besoin de 4K)
- **Poids cible** : 3-8 Mo pour le .mp4 (sinon temps de chargement trop long)
- **Pas de son** : supprime la piste audio pour alléger + éviter les blocages autoplay
- **Frames identiques** : la 1ʳᵉ et la dernière frame doivent matcher pour une boucle invisible

## Encodage recommandé (ffmpeg)

```bash
# MP4 (universel)
ffmpeg -i source.mp4 -c:v libx264 -preset slow -crf 26 \
       -vf "scale=1920:-2" -an -movflags +faststart \
       -pix_fmt yuv420p hero.mp4

# WebM (optionnel, plus léger)
ffmpeg -i source.mp4 -c:v libvpx-vp9 -crf 34 -b:v 0 \
       -vf "scale=1920:-2" -an hero.webm
```

## Fallback automatique

Si la vidéo ne charge pas ou si l'autoplay est bloqué (iOS économie d'énergie, etc.),
l'image `images/hero-bg.png` s'affiche à la place via l'attribut `poster=` du `<video>`.
