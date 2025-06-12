//  private Long id;
//     private String campName;
//     private Long capacity;
//     private String manager;
//     private String city;
//     private String state;
//     private String country;
//     private String postalCode;
//     @OneToMany(mappedBy = "camp",cascade = CascadeType.PERSIST)
//     private List<Refugee> refugees=new ArrayList<>();
export type CampDto={
    campName:string,
    capacity:number,
    manager:string,
    city:string,
    state:string,
    country:string,
    postalCode:string
}

