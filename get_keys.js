<script>
var object = {"a": { "b": { "c": "d" }}};
console.log("Result at 'a.b.c': ",_.get(object, 'a.b.c'));
console.log("Result at 'a.b.nonexistent key': ",_.get(object, 'a.b.nonexistent', "default result"));
var object2 = {"x":{"y":{"z":"a"}}};
console.log("Result at 'x.y.z': ",_.get(object2, 'x.y.z'));
</script>
