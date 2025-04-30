<script setup>

import ImageModal from '/src/components/ImageModal.vue';
import MoreButton from '/src/components/MoreButton.vue';

</script>

<template>
    <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./young/text/n1.txt" imageSrc="./images/3.jpg" />
    </div>
<div>
<h1>Инструменты нейроарта</h1>

<ol>
    <li>
        Сайт <a href="https://www.mage.space/" target="_blank" rel="noopener noreferrer">MAGE.SPACE</a> генерирует картинки и видео. Бесплатно!!!
    </li>
    <li>Сайт HUGGING FACE<a href="https://huggingface.co/spaces/black-forest-labs/FLUX.1-dev" target="_blank" rel="noopener noreferrer"> SPACES</a> Пространство для тестирования новинок нейросетей</li>
    <li>Сайт <a href="https://www.recraft.ai/" target="_blank" rel="noopener noreferrer">Нейросеть RECRAFT.AI</a> от основательницы Яндекса. В настоящий момент из-за санкций временно не доступна</li>
    <li>Перенос лица с фото на генеративное изображение <a href="https://huggingface.co/spaces/yanze/PuLID-FLUX" target="_blank" rel="noopener noreferrer">PulID FLUX</a> </li>
    <li>Генерация 3D моделей с экспортом в Blender <a href="https://www.tripo3d.ai/app/home" target="_blank" rel="noopener noreferrer"> Tripo3d.ai</a> </li>
    <li>Увеличение разрешения с помощью ИИ <a href="https://huggingface.co/spaces/jasperai/Flux.1-dev-Controlnet-Upscaler" target="_blank" rel="noopener noreferrer"> FLUX ControlNet Upscale</a> </li>
    <li>Генератор подсказок по категориям <a href="https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator" target="_blank" rel="noopener noreferrer"> с помощью LLM</a> </li>
    <li>Видео генератор <a href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer"> LUMA</a> </li>
    <li>Видео генератор <a href="https://www.hedra.com/" target="_blank" rel="noopener noreferrer"> HEDRA</a> с синтезом речи </li>
    <li>Стили художников <a href="https://cheatsheet.strea.ly/" target="_blank" rel="noopener noreferrer"> ОООЧЕНЬ тормозит </a> из-за огромной коллекции</li>
    <li>Создание CANNY, DEPTH, POSE <a href="https://posemy.art/app/" target="_blank" rel="noopener noreferrer"> из позы человека или животного </a></li>



</ol>
  <h1>
  Нейро-галерея кружка <a href="https://civitai.com/collections/9321690" target="_blank" rel="noopener noreferrer"> "Нейроарт" </a> школы №47 г. Липецка 
</h1>

</div>

<div class="container">
    <!-- Одиночные изображения -->
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/94f45c4a-cc69-4041-86af-90a7bf287110/original=true,quality=90/image%20(14).jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/89241a98-9252-4855-b266-1d3f8237ae40/original=true,quality=90/GRBV91j8XTQ.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7a134b0d-6ac1-4246-aabd-315639a0364e/original=true,quality=90/f2wBjZkX7Ek.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/31369ca6-f577-4348-ac98-daf1b48d345a/original=true,quality=90/6hEg4a_P1XI.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cdca89f0-8cd1-4cdc-a4f1-49de26d9ee15/original=true,quality=90/HMNis5AQ91A.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3d1c4dad-bd8d-4da0-a899-08a3130b9e84/original=true,quality=90/cBFnZ5u_ojs.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/545fa158-492b-4276-a9e4-04efe93e15f6/original=true,quality=90/8iOIoRFSwSM.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1c26c93b-c740-46ff-b980-02459a4f28d8/original=true,quality=90/IYm-PwlGfc0.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2f873f2a-ba41-4300-9de5-ec5ee4ad165e/original=true,quality=90/e1wgSlNSsfk.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/17b35821-754a-4ae5-b9b2-551692fdf737/original=true,quality=90/image%20(1).jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c6b690b1-4bec-4106-b580-001fc1f5050d/original=true,quality=90/tmpsrzdkamx.jpeg" imageWidth="150px" />
    </div>


    <div class="single-image">
        <ImageModal imageSrc="./images/16.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="./images/17.jpeg" imageWidth="150px" />
    </div>
    <div class="single-image">
        <ImageModal imageSrc="./images/1.jpg" imageWidth="150px" />
    </div>

    <!-- Изображения с текстом (промпты) -->
    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/624b0f6d-6e63-4017-ba7f-b89ddb7e549b/original=true,quality=90/Миша%202.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            Aliens on the planet Dumpling
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/008f3106-a1e5-433a-9ced-e6ea7842cb40/original=true,quality=90/тралалелотралала.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            A shark in blue Nike sneakers stands on a beach near the sea
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c4a9d170-776d-4e8c-8ad6-d68377072ff9/original=true,quality=90/00015-1215671990.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            a cat in a hat and scarf and boots
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4091aa65-b1d9-4e52-b637-471fc95cbcb9/original=true,quality=90/00003-1070851382.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            A dragon with wings sits on a mountain with a waterfall and dragons fly near bya large dragon flies over the city and nearby flying pterodactyls
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a7dd5e4-27d1-4c46-80f8-f71430fca4a7/original=true,quality=90/00018-2846415293.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            A tiny alien gecko with translucent, crystalline skin that refracts light into dazzling rainbow colors. It has six delicate limbs, two of which are curled in a cute resting position. Its tail has a jelly-like glow, shifting in hues of cyan and fuchsia. It clings lightly to the personâs fingertip, looking up with bright, intelligent eyes. The background is a blurred futuristic cityscape, filled with neon holograms and colorful bokeh lights.
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0a9e1a38-14be-4ae4-ac57-57675f0c402a/original=true,quality=90/00012-3032498663.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            watercolor painting A white dog in red top hat . vibrant, beautiful, painterly, detailed, textural, artistic
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="./images/10.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="./images/11.png" imageWidth="150px" />
        <div class="prompt-text">
            bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere."
        </div>
    </div>


    <div class="prompt-item">
        <ImageModal imageSrc="./images/15.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet
        </div>
    </div>

    <div class="prompt-item">
        <ImageModal imageSrc="./images/2.jpg" imageWidth="150px" />
        <div class="prompt-text">
            A dove stands on two legs in an aristocratic coat and spy glasses on the tenth street of a dark city in the middle of a dark night
        </div>
    </div>
</div>
</template>

<style>

h1 {
  text-align: center;
  margin: 20px 0;
}

ol {
  margin: 20px 0;
  padding-left: 40px;
}

ol li {
  margin: 10px 0;
  padding: 8px 0;
}

    #morebutton {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .single-image {
        margin: 10px;
        display: flex;
        justify-content: center;
        width: 150px;
    }

    .prompt-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        max-width: 800px;
        margin: 15px 0;
        padding: 15px;
        background: #f8f8f8;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .prompt-text {
        flex: 1;
        text-align: left;
        word-wrap: break-word;
        padding: 10px;
        font-size: 14px;
        color: #333;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        .prompt-item {
            flex-direction: column;
            align-items: center;
        }
        
        .prompt-text {
            max-width: 100%;
            padding: 10px 0;
        }
    }
</style>