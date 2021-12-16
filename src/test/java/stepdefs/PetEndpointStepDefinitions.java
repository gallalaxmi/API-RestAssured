package stepdefs;

import cucumber.api.java.en.Given;
import endpoints.PetEndpoint;
import model.Pet;

public class PetEndpointStepDefinitions {

	private World world;
	private PetEndpoint petEndpoint = new PetEndpoint();

	public PetEndpointStepDefinitions(World world) {
		this.world = world;
	}

	@Given("^a pet is '(.*?)' for order$")
	public void a_cat_is_availablilability(String availability) {
		petEndpoint.addPet(world,
				new Pet(16, "7:feline", "Pussy Cat", "image1:image2", "17:Furry", availability));
	}
}
