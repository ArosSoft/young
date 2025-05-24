<template>
  <div class="home">
    <div class="content-block">
      
      <router-link to="./about" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/onas.jpg" alt="O NAS" />
          </div>
          <div class="text-container">
            <h2>О нас</h2>
            <p>Мы - команда энтузиастов, которая стремится создать пространство для творчества, общения и реализации идей молодежи.</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./makeProject" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/proj.jfif" alt="Детские проекты" />
          </div>
          <div class="text-container">
            <h2>Детские проекты</h2>
            <p>Проекты молодых изобретателей. Делитесь своими идеями и находите единомышленников!</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./welcome" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/idei.png" alt="idei" />
          </div>
          <div class="text-container">
            <h2>Идеи молодежи</h2>
            <p>Площадка для обсуждения и реализации самых смелых идей молодого поколения. Ваше творчество - наше будущее!</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./neuroart" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/neuroart.jpg" alt="neuroart" />
          </div>
          <div class="text-container">
            <h2>Нейро-арт</h2>
            <p>Искусство, созданное с помощью нейросетей. Исследуйте границы цифрового творчества и создавайте уникальные произведения.</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./graffiti" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/cat.jpeg" alt="graffiti" />
          </div>
          <div class="text-container">
            <h2>Граффити</h2>
            <p>Уличное искусство как форма самовыражения. Откройте для себя мир граффити и создавайте свои уникальные работы.</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./volonter" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/volont.png" alt="volonterstvo" />
          </div>
          <div class="text-container">
            <h2>Волонтерство</h2>
            <p>Возможность сделать мир лучше. Присоединяйтесь к нашим волонтерским программам и станьте частью позитивных изменений.</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="./maker" class="block-link">
        <div class="block">
          <div class="image-container">
            <img src="./logo/diy.png" alt="neuroart" />
          </div>
          <div class="text-container">
            <h2>Мэйкерство</h2>
            <p>Создавайте, изобретайте, творите! Мэйкерство - это философия DIY (сделай сам) в действии.</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: black;
  text-align: center;
  margin-bottom: 30px;
}

.content-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.block-link {
  text-decoration: none;
  color: inherit;
}

.block {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.block:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.text-container {
  flex: 1;
}

.text-container h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.text-container p {
  color: #34495e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .block {
    flex-direction: column;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
  }
}
</style>