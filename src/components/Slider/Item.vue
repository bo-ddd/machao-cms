<template>
    <div class="SliderItem">
        <div>
            <img src="@/assets/imgs/icon-Sliter_item1.png">
        </div>
        <div class="SliderItem-text">
            <img src="@/assets/imgs/icon-text.png" alt="">
            <span>替代 Sketch/XD 在线协作</span>
        </div>
    </div>
</template>

<style scoped>
.SliderItem {
    width: 218px;
    /* height: 154px; */
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: space-between;
}

.SliderItem-text {
    display: flex;
    font-size: 15px;
    gap: 10px;
    padding: 20PX 0;
}

.SliderItem-text img {
    width: 20px;
    height: 20px;
}
</style>