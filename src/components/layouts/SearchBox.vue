<template>
    <div class="search flex items-center">
        <input type="text" class="w-16 rounded-full" placeholder="Write something for search" />
        <img
          class="search__toggle cursor-pointer"
          src="@/assets/images/close.png"
          alt=""
        />

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            class="search__magnify"
        >
            <path
                id="ic_search_24px"
                d="M31.588,28.157l-2.447-.617a14.888,14.888,0,1,0-1.6,1.6l.617,2.447L39.592,43,43,39.592Zm-13.722,0A10.292,10.292,0,1,1,28.157,17.866,10.278,10.278,0,0,1,17.866,28.157Z"
                transform="translate(-3 -3)"
            />
        </svg>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 1C262F
.search {
    position: relative;
    svg {
        position: absolute;
        pointer-events: none;
        background: transparent;
        left: 1rem;
        z-index: 1;
        transition: all 0.5s;
        fill: #cecece;
    }

    &__toggle {
        position: absolute;
        display: none;
        right: 1rem;
        z-index: 1;
    }

    input {
        opacity: 0;
        transition: all 0.5s;
        height: 60px;
        padding-left: 60px;
        font-family: inherit;
        font-size: 20px;
        cursor: pointer;
    }

    input:focus {
        background-color: #cecece;
        width: 20rem;
        opacity: 1;
        cursor: text;
    }

    input:focus + img {
        display: inline-block;
    }

    input:focus ~ .search__magnify {
        display: inline-block;
        cursor: pointer !important;
        fill: #1C262F;
    }
}
</style>