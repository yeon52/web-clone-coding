package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "Spring!!"); // key, value값
        return "hello"; // resources/templates 속 hello.html 파일을 찾아서 랜더링 해라
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template"; // viewResolver에게 주고, viewResolver가 html로 반환 후 내려줌(템플릿엔진 처리)
    }

    @GetMapping("hello-string")
    @ResponseBody // http body부분에 데이터를 직접 넣어 주겠다.
    public String helloString(@RequestParam("name") String name) {
        return "hello " + name; // ->템플릿엔진과 다르게 데이터'만' 내려줌
    }

    @GetMapping("hello-api") // json 방식
    @ResponseBody // 객체를 반환하고 ResponseBody사용 시 json으로 반환이 default
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }

    static class Hello {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
