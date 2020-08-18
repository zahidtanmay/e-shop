<template>
  <div id="app">
    <!--<VZoom img="https://f002.backblazeb2.com/file/isalebdDev/1596051004.jpeg" :width="400"></VZoom>-->
    <ProductZoomer :base-images="images"
                   :base-zoomer-options="zoomerOptions"
    />
  </div>

</template>


<script>
  export default {
    data: () => ({
      images: {
        normal_size: [
          {
            id: 1,
            url: 'https://f002.backblazeb2.com/file/isalebdDev/1596224138.jpeg'
          },
          {
            id: 2,
            url: 'https://f002.backblazeb2.com/file/isalebdDev/1596051518.jpeg'
          }
        ]
      },

      zoomerOptions: {
        zoomFactor: 4,
        pane: "container",
        hoverDelay: 300,
        namespace: "inline-container",
        move_by_click: true,
        scroll_items: 7,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "left"
      }
    })
  }
</script>

<style>
  .thumb-list{
    height:376px !important;
    width:76.6px !important;
    grid-template-rows:calc(100%/6/2) repeat(4, auto) calc(100%/6/2);
    visibility:visible !important;
  }

  .pane-container {
    height: 400px !important;
    width: 400px !important;
  }

  .inline-container-base-container {
    width: 300px !important;
  }
</style>
