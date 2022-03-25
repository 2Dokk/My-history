<button data-toggle-id="subscribe-mail">
  구독 폼 보여주기
</button>

<form id="subscribe-mail" hidden>
  메일 주소: <input type="email">
</form>

<script>
  document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });
</script>