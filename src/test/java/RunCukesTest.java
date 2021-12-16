import org.junit.runner.RunWith;
import cucumber.api.*;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources"},
		format={"pretty","html:target/reports/test-report"},
		glue={"stepdefs"},
		tags= "@StoreOrders"
)
public class RunCukesTest {}
