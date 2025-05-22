<script>
    let { text , hrefto } = $props()
</script>
<a href={hrefto}>   
    <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 self-start hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_4px_2px_0px_rgba(221,107,32,0.4),8px_8px_2px_0px_rgba(237,137,54,0.3),12px_12px_2px_0px_rgba(246,173,85,0.2),16px_16px_2px_0px_rgba(251,211,141,0.1)]">{text}</button>
</a>