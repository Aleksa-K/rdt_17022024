class HamsterTest {

    public static void main(String[] args) {
        Hamster hamster = new Hamster();
        hamster.setAge(1);
        hamster.setColor("Brown");
        hamster.setName("Hulk");
        hamster.setWeight(100);

        System.out.println("Hamster age = " + hamster.getAge());
        System.out.println("Hamster name = " + hamster.getName());
        System.out.println("Hamster color = " + hamster.getColor());
        System.out.println("Hamster weight = " + hamster.getWeight());

        hamster.eat();
        System.out.println("Hamster weight = " + hamster.getWeight());
        hamster.eat();
        hamster.eat();
        hamster.eat();
        hamster.eat();
        System.out.println("Hamster weight = " + hamster.getWeight());
    }
}
