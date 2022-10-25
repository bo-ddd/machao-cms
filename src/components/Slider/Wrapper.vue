<template>
    <div class="Slider">
        <div>
            <span>资源广场</span>
            
        </div>
        <div class="Slider-items">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.Slider {
    width: 100%;
    background-color: #f3f8fe;
    border-radius: 10px;
    padding: 22px 22px 5px 22px;
    box-sizing: border-box;
}

.Slider-items {
    display: flex;
    gap: 0 16px;
    overflow-x: scroll;
}

::-webkit-scrollbar {
    background-color: #e1e8ee;
    height: 6px;
}

::-webkit-scrollbar-track {
    background-color: #f1f8fe;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e1e8ee;
}
</style>